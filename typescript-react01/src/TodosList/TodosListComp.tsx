import { Table, Checkbox } from 'flowbite-react';
import { useQuery } from 'react-query'
import { getTodosList } from '../api';
import { ITodo } from '../interfaces/ITodo';
import './TodosListComp.css';

const TodosListComp = () => {
  const { data } = useQuery('todosList', getTodosList);
  
  return (
    <div className="todos-list-wrapper">
      <h2>Keep track of your tasks in one go</h2>
      <p>Manage your goals with few simple clicks in our optimized experience.</p>
      <div className="flex todos-list">
        <Table hoverable={true}>
          <Table.Head>
            <Table.HeadCell>
              ID
            </Table.HeadCell>
            <Table.HeadCell>
              Task Name
            </Table.HeadCell>
            <Table.HeadCell>
              Assigned to userID
            </Table.HeadCell>
            <Table.HeadCell>
              Completion status
            </Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">
                Edit
              </span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
        { data?.data.map((todo: ITodo, index: number) =>
          <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="!p-4">
              {todo.id}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {todo.title}
            </Table.Cell>
            <Table.Cell>
              {todo.userId}
            </Table.Cell>
            <Table.Cell>
              <Checkbox defaultChecked={todo.completed} />
            </Table.Cell>
            <Table.Cell>
              <a
                href="#1"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
        )}
        </Table.Body>
          </Table>
      </div>
    </div>
  );  
}

export default TodosListComp;