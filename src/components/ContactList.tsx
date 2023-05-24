import React, { useState } from 'react';
import CrossIcon from './icons/cross.png';
import AddContact from './AddContact';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/reducers/ContactSlice';

const ContactList: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setIsEdit] = useState();
    const contactList = useSelector((state:any) => state?.contacts);
    // console.log(4444, contactList?.contacts);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="text-center">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                        setIsModalOpen(true)
                        setIsEdit(undefined);
                    }}
                >
                    Create Contact
                </button>
            </div>
            {isModalOpen && <AddContact setIsModalOpen={setIsModalOpen} isEdit={isEdit} />}
            {contactList?.contacts?.length > 0 ? (
                <div className="flex flex-wrap ml-32">
                    {contactList?.contacts?.map((el: any, index: any) => (
                        <div key={index} className="w-72 mx-2 my-4 ">
                            <div className="bg-white shadow-md rounded-md p-4 mb-4">
                                <div className="mb-2">
                                    <span className="font-bold">First Name: </span>
                                    {el.firstName}
                                </div>
                                <div className="mb-2">
                                    <span className="font-bold">Last Name: </span>
                                    {el.lastName}
                                </div>
                                <div>
                                    <span className="font-bold">Status: </span>
                                    {el.status}
                                </div>
                                <div className="flex justify-end mt-4">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                        onClick={() => {
                                            setIsModalOpen(true)
                                            setIsEdit(el)
                                        }} >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => dispatch(deleteContact(el.id))}
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex justify-center bg-gray-200 ml-96 mt-16 p-4 w-96 rounded text-center">
                    <div>
                        <img src={CrossIcon} alt="Cross Icon" />
                    </div>
                    <div>
                        <span>No contact found. Please add a contact using the Create Contact button.</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactList;
