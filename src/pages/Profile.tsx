import React, { useState } from 'react';
import { Camera, Instagram, Youtube, Facebook } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import XIcon from '../components/icons/XIcon';

const Profile = () => {
  const [socialLinks, setSocialLinks] = useState({
    facebook: '',
    instagram: '',
    x: '',
    youtube: '',
    tiktok: ''
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <div className="relative inline-block">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-[#00ff3f]"
          />
          <button className="absolute bottom-0 right-0 p-2 bg-[#022424] rounded-full border border-[#03ffc3]/20">
            <Camera size={20} />
          </button>
        </div>
        <h1 className="text-2xl font-bold mt-4">@username</h1>
        <p className="text-[#03ffc3]/80">Content Creator</p>
      </div>

      <div className="grid gap-6">
        <div className="bg-[#022424] border border-[#03ffc3]/20 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Social Accounts</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Facebook</label>
              <div className="relative">
                <Facebook className="absolute left-3 top-1/2 -translate-y-1/2 text-[#03ffc3]/60" size={20} />
                <input
                  type="text"
                  value={socialLinks.facebook}
                  onChange={(e) => setSocialLinks(prev => ({ ...prev, facebook: e.target.value }))}
                  className="w-full bg-transparent border border-[#03ffc3]/20 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[#00ff3f]"
                  placeholder="facebook.com/username"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Instagram</label>
              <div className="relative">
                <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 text-[#03ffc3]/60" size={20} />
                <input
                  type="text"
                  value={socialLinks.instagram}
                  onChange={(e) => setSocialLinks(prev => ({ ...prev, instagram: e.target.value }))}
                  className="w-full bg-transparent border border-[#03ffc3]/20 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[#00ff3f]"
                  placeholder="@yourusername"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">X (Twitter)</label>
              <div className="relative">
                <XIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-[#03ffc3]/60" size={20} />
                <input
                  type="text"
                  value={socialLinks.x}
                  onChange={(e) => setSocialLinks(prev => ({ ...prev, x: e.target.value }))}
                  className="w-full bg-transparent border border-[#03ffc3]/20 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[#00ff3f]"
                  placeholder="@handle"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">YouTube</label>
              <div className="relative">
                <Youtube className="absolute left-3 top-1/2 -translate-y-1/2 text-[#03ffc3]/60" size={20} />
                <input
                  type="text"
                  value={socialLinks.youtube}
                  onChange={(e) => setSocialLinks(prev => ({ ...prev, youtube: e.target.value }))}
                  className="w-full bg-transparent border border-[#03ffc3]/20 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[#00ff3f]"
                  placeholder="channel-url"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">TikTok</label>
              <div className="relative">
                <FaTiktok className="absolute left-3 top-1/2 -translate-y-1/2 text-[#03ffc3]/60" size={20} />
                <input
                  type="text"
                  value={socialLinks.tiktok}
                  onChange={(e) => setSocialLinks(prev => ({ ...prev, tiktok: e.target.value }))}
                  className="w-full bg-transparent border border-[#03ffc3]/20 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[#00ff3f]"
                  placeholder="@tiktokhandle"
                />
              </div>
            </div>
          </div>
          <button className="mt-6 px-6 py-2 bg-[#00ff3f] text-[#022424] rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Save Changes
          </button>
        </div>

        <div className="bg-[#022424] border border-[#03ffc3]/20 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email Notifications</label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox text-[#00ff3f]" />
                  <span>New engagement</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox text-[#00ff3f]" />
                  <span>Community updates</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;