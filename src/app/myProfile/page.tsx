

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import ProfileSection from '../components/myProfile/ProfileSection';



const MyProfile = async () => {

    
    return (
        <div>
            <div className="px-5 pb-10 pt-20 lg:px-20">
                <div className="pt-10">
                    <ProfileSection/>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;