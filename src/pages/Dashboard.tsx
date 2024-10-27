import React, { useState } from 'react';
import { BarChart3, Users, ThumbsUp, TrendingUp, Calendar, CreditCard, Instagram, Youtube, Facebook } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import XIcon from '../components/icons/XIcon';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [engagedTimeframe, setEngagedTimeframe] = useState('today');
  const [postsTimeframe, setPostsTimeframe] = useState('today');
  const [activePlatform, setActivePlatform] = useState('instagram');
  const navigate = useNavigate();

  const stats = [
    {
      icon: Users,
      label: 'Community Reach',
      value: '2.4K',
      trend: '+12%',
      color: 'text-[#00ff3f]'
    },
    {
      icon: ThumbsUp,
      label: 'Engagements Made',
      value: '156',
      trend: '+8%',
      color: 'text-[#03ffc3]'
    },
    {
      icon: TrendingUp,
      label: 'Engagement Rate',
      value: '24%',
      trend: '+5%',
      color: 'text-[#00ff3f]'
    },
    {
      icon: BarChart3,
      label: 'Posts This Month',
      value: '12',
      trend: '+2',
      color: 'text-[#03ffc3]'
    }
  ];

  const engagedPosts = {
    facebook: [
      {
        id: 6,
        username: '@socialinfluencer',
        thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0',
        engagedAt: '1h ago',
        type: 'like'
      }
    ],
    instagram: [
      {
        id: 1,
        username: '@creativemind',
        thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0',
        engagedAt: '2h ago',
        type: 'like'
      },
      {
        id: 2,
        username: '@artistry',
        thumbnail: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb',
        engagedAt: '3h ago',
        type: 'comment'
      }
    ],
    x: [
      {
        id: 5,
        username: '@techinfluencer',
        thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
        engagedAt: '15m ago',
        type: 'retweet'
      }
    ],
    youtube: [
      {
        id: 3,
        username: '@techreview',
        thumbnail: 'https://images.unsplash.com/photo-1611162618479-ee4d1e0e5d36',
        engagedAt: '1h ago',
        type: 'like'
      }
    ],
    tiktok: [
      {
        id: 4,
        username: '@dancepro',
        thumbnail: 'https://images.unsplash.com/photo-1611162616677-f3f6aa2fda41',
        engagedAt: '30m ago',
        type: 'share'
      }
    ]
  };

  const posts = {
    facebook: [
      {
        id: 6,
        thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
        engagements: 89,
        postedAt: '30m ago'
      }
    ],
    instagram: [
      {
        id: 1,
        thumbnail: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
        engagements: 45,
        postedAt: '5h ago'
      },
      {
        id: 2,
        thumbnail: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1',
        engagements: 32,
        postedAt: '1d ago'
      }
    ],
    x: [
      {
        id: 5,
        thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
        engagements: 67,
        postedAt: '4h ago'
      }
    ],
    youtube: [
      {
        id: 3,
        thumbnail: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1',
        engagements: 128,
        postedAt: '2d ago'
      }
    ],
    tiktok: [
      {
        id: 4,
        thumbnail: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1',
        engagements: 76,
        postedAt: '3d ago'
      }
    ]
  };

  const PlatformIcon = {
    facebook: Facebook,
    instagram: Instagram,
    x: XIcon,
    youtube: Youtube,
    tiktok: FaTiktok
  };

  const platformColor = {
    facebook: 'hover:text-blue-500',
    instagram: 'hover:text-pink-500',
    x: 'hover:text-gray-200',
    youtube: 'hover:text-red-500',
    tiktok: 'hover:text-[#00f2ea]'
  };

  const timeframes = [
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'year', label: 'This Year' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex gap-2">
          {['overview', 'engaged', 'posts'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg capitalize ${
                activeTab === tab
                  ? 'bg-[#00ff3f] text-[#022424]'
                  : 'text-[#03ffc3] hover:bg-[#03ffc3]/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'overview' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-[#022424] border border-[#03ffc3]/20 rounded-xl p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <Icon size={24} className={stat.color} />
                    <span className="text-[#00ff3f] text-sm">{stat.trend}</span>
                  </div>
                  <h3 className="text-[#03ffc3]/80 text-sm">{stat.label}</h3>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-[#022424] border border-[#03ffc3]/20 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Engagements</h2>
              <div className="space-y-4">
                {engagedPosts[activePlatform].slice(0, 2).map((post) => (
                  <div
                    key={post.id}
                    className="flex items-center gap-4 p-4 border border-[#03ffc3]/20 rounded-lg"
                  >
                    <img
                      src={post.thumbnail}
                      alt={post.username}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold">{post.username}</h3>
                      <p className="text-[#03ffc3]/60 text-sm">
                        Engaged {post.engagedAt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#022424] border border-[#03ffc3]/20 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold">My Subscription</h2>
                    <p className="text-[#03ffc3]/80 mt-1">Monthly Plan</p>
                  </div>
                  <CreditCard size={24} className="text-[#00ff3f]" />
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#03ffc3]/80">Days Remaining</span>
                    <span className="text-[#00ff3f] font-semibold">23 days</span>
                  </div>
                  <div className="h-2 bg-[#03ffc3]/20 rounded-full">
                    <div className="h-full w-3/4 bg-[#00ff3f] rounded-full"></div>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/payment')}
                  className="w-full px-4 py-2 bg-[#00ff3f] text-[#022424] rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Manage Subscription
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === 'engaged' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              {Object.entries(PlatformIcon).map(([platform, Icon]) => (
                <button
                  key={platform}
                  onClick={() => setActivePlatform(platform)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activePlatform === platform
                      ? 'bg-[#00ff3f] text-[#022424]'
                      : `text-[#03ffc3] hover:bg-[#03ffc3]/10 ${platformColor[platform]}`
                  }`}
                >
                  <Icon size={20} />
                  <span className="capitalize">{platform}</span>
                </button>
              ))}
            </div>
            <select
              value={engagedTimeframe}
              onChange={(e) => setEngagedTimeframe(e.target.value)}
              className="bg-[#022424] border border-[#03ffc3]/20 rounded-lg px-4 py-2 text-[#03ffc3]"
            >
              {timeframes.map((timeframe) => (
                <option key={timeframe.value} value={timeframe.value}>
                  {timeframe.label}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-6">
            {engagedPosts[activePlatform].map((post) => (
              <div
                key={post.id}
                className="bg-[#022424] border border-[#03ffc3]/20 rounded-xl p-4"
              >
                <div className="flex gap-4">
                  <img
                    src={post.thumbnail}
                    alt={post.username}
                    className="w-40 h-40 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{post.username}</h3>
                    <p className="text-[#03ffc3]/60">
                      You {post.type}d this post {post.engagedAt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'posts' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              {Object.entries(PlatformIcon).map(([platform, Icon]) => (
                <button
                  key={platform}
                  onClick={() => setActivePlatform(platform)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activePlatform === platform
                      ? 'bg-[#00ff3f] text-[#022424]'
                      : `text-[#03ffc3] hover:bg-[#03ffc3]/10 ${platformColor[platform]}`
                  }`}
                >
                  <Icon size={20} />
                  <span className="capitalize">{platform}</span>
                </button>
              ))}
            </div>
            <select
              value={postsTimeframe}
              onChange={(e) => setPostsTimeframe(e.target.value)}
              className="bg-[#022424] border border-[#03ffc3]/20 rounded-lg px-4 py-2 text-[#03ffc3]"
            >
              {timeframes.map((timeframe) => (
                <option key={timeframe.value} value={timeframe.value}>
                  {timeframe.label}
                </option>
              ))}
            </select>
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
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <ThumbsUp size={20} className="text-[#00ff3f]" />
                      <span className="font-semibold">{post.engagements} engagements</span>
                    </div>
                    <p className="text-[#03ffc3]/60">Posted {post.postedAt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;