import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Instagram, Youtube, Zap, Facebook } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import XIcon from '../components/icons/XIcon';
import PostPromotionButton from '../components/PostPromotionButton';
import PostPromotionModal from '../components/PostPromotionModal';
import { useSocialTracking } from '../hooks/useSocialTracking';
import { Platform, EngagementType } from '../types/social';

const CommunityBoard = () => {
  const [engagedToday, setEngagedToday] = useState(0);
  const [trialPostsLeft, setTrialPostsLeft] = useState(3);
  const [activePlatform, setActivePlatform] = useState<Platform>('instagram');
  const [isPromotionModalOpen, setIsPromotionModalOpen] = useState(false);
  const navigate = useNavigate();
  const { trackEngagement, isVerifying } = useSocialTracking();

  const posts = {
    instagram: [
      {
        id: 1,
        username: '@creativemind',
        platform: 'instagram' as Platform,
        thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0',
        engagementCount: 3,
        timestamp: '2h ago',
        url: 'https://instagram.com/p/xyz123'
      },
      {
        id: 2,
        username: '@artistry',
        platform: 'instagram' as Platform,
        thumbnail: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb',
        engagementCount: 1,
        timestamp: '3h ago',
        url: 'https://instagram.com/p/abc456'
      }
    ],
    youtube: [
      {
        id: 3,
        username: '@techreview',
        platform: 'youtube' as Platform,
        thumbnail: 'https://images.unsplash.com/photo-1611162618479-ee4d1e0e5d36',
        engagementCount: 5,
        timestamp: '1h ago',
        url: 'https://youtube.com/watch?v=xyz123'
      }
    ],
    facebook: [
      {
        id: 4,
        username: '@socialinfluencer',
        platform: 'facebook' as Platform,
        thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0',
        engagementCount: 2,
        timestamp: '1h ago',
        url: 'https://facebook.com/post/123'
      }
    ],
    x: [
      {
        id: 5,
        username: '@techinfluencer',
        platform: 'x' as Platform,
        thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
        engagementCount: 4,
        timestamp: '15m ago',
        url: 'https://x.com/status/123'
      }
    ],
    tiktok: [
      {
        id: 6,
        username: '@dancepro',
        platform: 'tiktok' as Platform,
        thumbnail: 'https://images.unsplash.com/photo-1611162616677-f3f6aa2fda41',
        engagementCount: 2,
        timestamp: '30m ago',
        url: 'https://tiktok.com/@dancepro/video/123'
      }
    ]
  };

  const PlatformIcon = {
    instagram: Instagram,
    youtube: Youtube,
    facebook: Facebook,
    x: XIcon,
    tiktok: FaTiktok
  };

  const platformColor = {
    instagram: 'hover:text-pink-500',
    youtube: 'hover:text-red-500',
    facebook: 'hover:text-blue-500',
    x: 'hover:text-gray-200',
    tiktok: 'hover:text-[#00f2ea]'
  };

  const handleEngagement = async (
    platform: Platform,
    postUrl: string,
    engagementType: EngagementType
  ) => {
    if (isVerifying) return;

    const status = await trackEngagement(platform, postUrl, engagementType);

    if (status.success) {
      setEngagedToday(prev => Math.min(prev + 1, 5));
      toast.success('Engagement verified!');
    } else {
      toast.error(status.error || 'Failed to verify engagement');
    }
  };

  const handlePromotionSubmit = (data: { platform: string; url: string }) => {
    // Handle post promotion submission
    console.log('Promoting post:', data);
    toast.success('Post submitted for promotion!');
    setTrialPostsLeft(prev => Math.max(0, prev - 1));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">Community Board</h1>
          <p className="text-[#03ffc3]/80">
            Engaged today: {engagedToday}/5
          </p>
        </div>
        <div className="flex items-center gap-4">
          {trialPostsLeft > 0 ? (
            <div className="bg-[#00ff3f]/20 px-4 py-2 rounded-lg">
              <p className="text-[#00ff3f]">
                Trial posts remaining: {trialPostsLeft}
              </p>
            </div>
          ) : null}
          <PostPromotionButton
            engagedToday={engagedToday}
            onPromote={() => setIsPromotionModalOpen(true)}
          />
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        {Object.entries(PlatformIcon).map(([platform, Icon]) => (
          <button
            key={platform}
            onClick={() => setActivePlatform(platform as Platform)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activePlatform === platform
                ? 'bg-[#00ff3f] text-[#022424]'
                : `text-[#03ffc3] hover:bg-[#03ffc3]/10 ${platformColor[platform as Platform]}`
            }`}
          >
            <Icon size={20} />
            <span className="capitalize">{platform}</span>
          </button>
        ))}
      </div>

      <div className="grid gap-6">
        {posts[activePlatform].map((post) => (
          <div
            key={post.id}
            className="bg-[#022424] border border-[#03ffc3]/20 rounded-xl p-4"
          >
            <div className="flex gap-4">
              <img
                src={post.thumbnail}
                alt="Post thumbnail"
                className="w-40 h-40 object-cover rounded-lg"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{post.username}</h3>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm ${platformColor[post.platform]} transition-colors flex items-center gap-1`}
                    >
                      {React.createElement(PlatformIcon[post.platform], { size: 16 })}
                      <span>View on {post.platform}</span>
                    </a>
                  </div>
                  <span className="text-sm text-[#03ffc3]/60">{post.timestamp}</span>
                </div>
                <div className="mt-4 flex gap-6">
                  <button
                    onClick={() => handleEngagement(post.platform, post.url, 'like')}
                    disabled={isVerifying}
                    className="flex items-center gap-2 hover:text-[#00ff3f] transition-colors disabled:opacity-50"
                  >
                    <Heart size={20} />
                    Like
                  </button>
                  <button
                    onClick={() => handleEngagement(post.platform, post.url, 'comment')}
                    disabled={isVerifying}
                    className="flex items-center gap-2 hover:text-[#00ff3f] transition-colors disabled:opacity-50"
                  >
                    <MessageCircle size={20} />
                    Comment
                  </button>
                  <button
                    onClick={() => handleEngagement(post.platform, post.url, 'share')}
                    disabled={isVerifying}
                    className="flex items-center gap-2 hover:text-[#00ff3f] transition-colors disabled:opacity-50"
                  >
                    <Share2 size={20} />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <PostPromotionModal
        isOpen={isPromotionModalOpen}
        onClose={() => setIsPromotionModalOpen(false)}
        onSubmit={handlePromotionSubmit}
      />
    </div>
  );
};

export default CommunityBoard;