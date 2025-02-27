import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { ToastContainer, toast } from 'react-toastify'
import Trusted from '../Home5/Trusted';



const defaultImageUrl = 'https://shorturl.at/HT3tB';
const Setting = () => {
    // useForm for each section
    const { register: registerAccount, handleSubmit: handleAccountSubmit } = useForm();
    const { register: registerBilling, handleSubmit: handleBillingSubmit } = useForm();
    const { register: registerPassword, handleSubmit: handlePasswordSubmit } = useForm();


    // States for showing/hiding passwords
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Toggle password visibility
    const togglePasswordVisibility = (field) => {
        switch (field) {
            case 'current':
                setShowCurrentPassword((prevState) => !prevState);
                break;
            case 'new':
                setShowNewPassword((prevState) => !prevState);
                break;
            case 'confirm':
                setShowConfirmPassword((prevState) => !prevState);
                break;
            default:
                break;
        }
    };

    // Anonymous placeholder image URL

    // State for image upload and image preview URL, default image URL, and file name
    
    const [profileImage, setProfileImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(defaultImageUrl);
    const [fileName, setFileName] = useState(''); // File name state (initially empty)

    // Handlers for each form section
    const onAccountSubmit = (data) => {
        console.log('Account Settings Data:', data);
        console.log('Uploaded Profile Image:', profileImage);
        toast.success('Submitted Succesfully!', {
            position: 'top-center',
            autoClose: 4000
          })
          reset() // Clear the form fields
        // Logic to upload image or update profile
    };

    const onBillingSubmit = (data) => {
        console.log('Billing Address Data:', data);
        toast.success('Submitted Succesfully!', {
            position: 'top-center',
            autoClose: 4000
          })
          reset() // Clear the form fields
        // Logic to update billing address
    };

    const onPasswordSubmit = (data) => {
        console.log('Change Password Data:', data);
        // Logic to change password
        toast.success('Password Changed Succesfully!', {
            position: 'top-center',
            autoClose: 4000
          })
          reset() // Clear the form fields
    };

    // Image upload handler with preview
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(file);
            setImagePreview(URL.createObjectURL(file)); // Create preview URL for the selected image
            setFileName(file.name); // Set file name for display
        }
    };

    return (
        <div 
        data-aos="fade-left"
        className="w-full xmd:w-[900px] mx-auto p-6">
            {/* Account Settings Section */}
            <form data-aos="fade-left" onSubmit={handleAccountSubmit(onAccountSubmit)} className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm ">

                <h2 className="w-full text-xl font-semibold mb-4 border-b">Account Settings</h2>

                <div className="flex flex-col-reverse md:flex-row gap-4">
                    <div className="w-full md:w-2/3 md:pr-4">
                        <div className="mb-4">
                            <label className="block text-gray-700">First Name</label>
                            <input
                                {...registerAccount('firstName' , {required:true})}
                                className="w-full px-4 py-2 border focus:outline-none border-gray-300 rounded-md focus:border-2  focus:border-green-600 "
                                placeholder="Dianne"
                              
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Last Name</label>
                            <input
                                {...registerAccount('lastName' , {required:true})}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-2 focus:border-green-600"
                                placeholder="Russell"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                {...registerAccount('email' , {required:true})}
                                type="email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-2 focus:border-green-600"
                                placeholder="dianne@gmail.com"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Phone Number</label>
                            <input
                                {...registerAccount('phone' , {required: true})}
                                type="tel"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-2 focus:border-green-600"
                                placeholder="(603) 555-0123"
                            />
                        </div>
                    </div>

                    {/* Profile Image Upload on the right */}
                    <div className="w-full md:w-1/3 flex flex-col relative items-center md:items-start">
                        <div className="mb-4">
                            {/* Show default image or uploaded preview */}
                            <div className="mt-4 justify-center">
                                <img src={imagePreview} alt="Profile" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-2" />
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="absolute inset-0 cursor-pointer opacity-0"
                            />
                            <label className="block w-[100px] ml-4 md:ml-8 text-xs text-green-700 font-semibold text-center py-1  px-2 rounded-md border-2 border-green-700">
                                Chose Image
                            </label>


                        </div>
                    </div>
                </div>

                <div className="w-full">
                <button type="submit" className="bg-primary hover:bg-hard_primary text-white-200 px-4 py-2 rounded-full">Save Changes</button>
                <ToastContainer className="align-center" />
                </div>
               
            </form>

            {/* Billing Address Section */}
            <form data-aos="fade-left" onSubmit={handleBillingSubmit(onBillingSubmit)} className="mb-6 p-4 border rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4 border-b">Billing Address</h2>
                <div className="w-full flex flex-col md:flex-row md:space-x-6 justify-center">

                    <div className="w-full mb-4">
                        <label className="block text-gray-700">First Name</label>
                        <input
                            {...registerBilling('billingFirstName' , {required: true})}
                            className="w-full px-4 py-2 border  rounded-md focus:outline-none focus:border-2 focus:border-green-600"
                            placeholder="Dianne"
                        />
                    </div>
                    <div className="w-full mb-4">
                        <label className="block text-gray-700">Last Name</label>
                        <input
                            {...registerBilling('billingLastName' , {required:true})}
                            className="w-full px-4 py-2 border  rounded-md focus:outline-none focus:border-2 focus:border-green-600"
                            placeholder="Russell"
                        />
                    </div>
                    <div className="w-full mb-4">
                        <label className="block text-gray-700">Company Name<span className="text-gray-400 text-sm">(optional)</span></label>
                        <input
                            {...registerBilling('companyName')}
                            className="w-full px-4 py-2 border  rounded-md focus:outline-none focus:border-2 focus:border-green-600"
                            placeholder="Zalisoft"
                        />
                    </div>
                </div>

                <div className="w-full mb-4">
                    <label className="block text-gray-700">Street Address</label>
                    <input
                        {...registerBilling('streetAddress' , {required: true})}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-2 focus:border-green-600"
                        placeholder="Enter street address"
                    />
                </div>

                <div className="flex flex-col md:flex-row md:space-x-6">

                    <div className="w-full mb-4">
                        <label className="block text-gray-700">Country/Region</label>
                        <select
                            {...registerBilling('country' , {required: true})}
                            className="w-full px-4 py-2 border-2 rounded-md text-gray-400 focus:outline-none focus:border-green-600"
                        >
                            <option value="">Select a country/region</option>
                            <option value="USA">USA</option>
                        </select>
                    </div>


                    <div className="w-full mb-4">
                        <label className="block text-gray-700">State</label>
                        <select
                            {...registerBilling('state' , {required: true})}
                            className="w-full px-4 py-2 border-2 rounded-md text-gray-400 focus:outline-none focus:border-green-600"
                        >
                            <option value="">Select a state</option>
                            <option value="Washington">Washington DC</option>
                        </select>
                    </div>
                    <div className="w-full mb-4">
                        <label className="block text-gray-700">Zip Code</label>
                        <input
                            {...registerBilling('zipCode' , {required : true})}
                            className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:border-green-600"
                            placeholder="Enter zip code"
                        />
                    </div>
                </div>

                <div className="flex flex-col  md:flex-row md:space-x-6">
                    <div className="w-full mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            {...registerBilling('billingEmail' , {required: true})}
                            type="email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-2 focus:border-green-600"
                            placeholder="dianne.russell@gmail.com"
                        />
                    </div>
                    <div className="w-full mb-4">
                        <label className="block text-gray-700">Phone</label>
                        <input
                            {...registerBilling('billingPhone' , {required: true})}
                            type="tel"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-2 focus:border-green-600"
                            placeholder="(603) 555-0123"
                        />
                    </div>
                </div>


                <div className="w-full">
                <button type="submit" className="bg-primary hover:bg-hard_primary text-white-200 px-4 py-2 rounded-full">Save Changes</button>
                <ToastContainer className="align-center" />
                </div>
               
            </form>

            {/* Change Password Section */}
            <form data-aos="fade-left" onSubmit={handlePasswordSubmit(onPasswordSubmit)} className="mb-6 p-4 border rounded-lg shadow-sm">
                <h2 className="w-full text-xl font-semibold mb-4 border-b">Change Password</h2>
                <div className="mb-4 relative">
                    <label className="block text-gray-700">Current Password</label>
                    <input
                        {...registerPassword('currentPassword' ,{required: true})}
                        type={showCurrentPassword ? 'text' : 'password'}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-2 focus:border-green-600"
                        placeholder="Enter current password"
                    />
                    <button
                        type="button"
                        onClick={() => togglePasswordVisibility('current')}
                        className="absolute right-2 top-8 text-gray-500"
                    >
                        {showCurrentPassword ? <IoEyeOffOutline size={24} /> : <IoEyeOutline size={24} />}
                    </button>
                </div>


                <div className="w-full flex flex-col md:flex-row md:space-x-6">
                    {/* New Password */}
                    <div className="w-full mb-4 relative">
                        <label className="block text-gray-700">New Password</label>
                        <input
                            {...registerPassword('newPassword' , {required: true})}
                            type={showNewPassword ? 'text' : 'password'}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-2 focus:border-green-600"
                            placeholder="Enter new password"
                        />
                        <button
                            type="button"
                            onClick={() => togglePasswordVisibility('new')}
                            className="absolute right-2 top-8 text-gray-500"
                        >
                            {showNewPassword ? <IoEyeOffOutline size={24} /> : <IoEyeOutline size={24} />}
                        </button>
                    </div>
                    {/* Confirm Password */}
                    <div className="w-full mb-4 relative">
                        <label className="block text-gray-700">Confirm Password</label>
                        <input
                            {...registerPassword('confirmPassword' , {required: true})}
                            type={showConfirmPassword ? 'text' : 'password'}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-2 focus:border-green-600"
                            placeholder="Confirm new password"
                        />
                        <button
                            type="button"
                            onClick={() => togglePasswordVisibility('confirm')}
                            className="absolute right-2 top-8 text-gray-500"
                        >
                            {showConfirmPassword ? <IoEyeOffOutline size={24} /> : <IoEyeOutline size={24} />}
                        </button>
                    </div>
                </div>

                 <div className="w-full">
                 <button type="submit" className="bg-primary hover:bg-hard_primary text-white-200 px-4 py-2 rounded-full">Change Password</button>
                 <ToastContainer className="align-center" />
                 </div>
                
            </form>
        </div>
    );
};

export default Setting;


