import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../redux/reducers/ContactSlice';

interface AddContactProps {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isEdit: Edited | undefined;
}

interface FormValues {
    firstName: string;
    lastName: string;
    status: string;
}
interface Edited {
    id: number;
    firstName: string;
    lastName: string;
    status: string;
}

const AddContact: React.FC<AddContactProps> = ({ setIsModalOpen, isEdit }) => {

    const dispatch = useDispatch();
    // const contactList = useSelector((state) => state);

    const initialValues: FormValues = {
        firstName: isEdit ? isEdit.firstName : '',
        lastName: isEdit ? isEdit.lastName : '',
        status: isEdit ? isEdit.status : '',
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        status: Yup.string().required('Status is required'),
    });

    const handleSubmit = (values: FormValues) => {
        if (isEdit) {
            const id = isEdit.id;
            const contact = { id, ...values };
            dispatch(editContact(contact));
            setIsModalOpen(false);
        }
        else {
            const id = Math.random() * 5;
            const contact = { id, ...values };
            dispatch(addContact(contact));
            setIsModalOpen(false);
        }
    };
    return (
        <div className="fixed top-0 mt-10 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white w-96 p-4 rounded">
                <h2 className="text-2xl font-bold mb-4 text-center">{isEdit ? "Edit Contact" : "Create Contact"}</h2>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold" htmlFor="firstName">
                                First Name:
                            </label>
                            <Field
                                className="border rounded w-full py-2 px-3"
                                type="text"
                                id="firstName"
                                name="firstName"
                            />
                            <ErrorMessage
                                className="text-red-500"
                                component="div"
                                name="firstName"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 font-bold" htmlFor="lastName">
                                Last Name:
                            </label>
                            <Field
                                className="border rounded w-full py-2 px-3"
                                type="text"
                                id="lastName"
                                name="lastName"
                            />
                            <ErrorMessage
                                className="text-red-500"
                                component="div"
                                name="lastName"
                            />
                        </div>

                        <div className="mb-4">
                            <span className="block mb-2 font-bold">Status:</span>
                            <label className="inline-flex items-center">
                                <Field
                                    className="form-radio"
                                    type="radio"
                                    name="status"
                                    value="active"
                                />
                                <span className="ml-2">Active</span>
                            </label>
                            <label className="inline-flex items-center ml-4">
                                <Field
                                    className="form-radio"
                                    type="radio"
                                    name="status"
                                    value="inactive"
                                />
                                <span className="ml-2">Inactive</span>
                            </label>
                            <ErrorMessage
                                className="text-red-500"
                                component="div"
                                name="status"
                            />
                        </div>
                        <div className="text-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                type="submit"
                            >
                                {isEdit ? "Update" : "Submit"}
                            </button>
                            <button
                                className="ml-8  border-2 border-gray-400 text-black font-bold py-2 px-4 rounded"
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
export default AddContact;