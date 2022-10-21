import { Card, Dropdown } from 'flowbite-react';
import { useQuery } from 'react-query'
import { getUsersList } from '../api';
import { IUser } from '../interfaces/IUser';
import './UsersListComp.css';

const UsersListComp = () => {
  const { data } = useQuery('usersList', getUsersList);
  
  return (
    <div className="users-list-wrapper">
      <h2>Connect with users you like to interact</h2>
      <p>Each user has a different story to tell! Connect with everyone and learn more.</p>
      <div className="flex users-list">
        { data?.data.map((user: IUser, index: number) =>
          <div key={index} className="user-wrapper">
            <Card>
              <div className="flex justify-end px-4 pt-4">
                <Dropdown
                  inline={true}
                  label=""
                >
                  <Dropdown.Item>
                    <a
                      href="#1"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a
                      href="#1"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Export Data
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a
                      href="#1"
                      className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </Dropdown.Item>
                </Dropdown>
              </div>
              <div className="flex flex-col items-center pb-10">
                <img
                  className="mb-3 h-24 w-24 rounded-full shadow-lg"
                  src={`https://flowbite.com/docs/images/people/profile-picture-${(index % 3) + 1}.jpg`}
                  alt={`${user.name}`}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {user.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {user.company.name}
                </span>
                <div className="mt-4 flex space-x-3 lg:mt-6">
                  <a
                    href="#1"
                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add
                  </a>
                  <a
                    href="#1"
                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    Message
                  </a>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  ); 
}

export default UsersListComp;