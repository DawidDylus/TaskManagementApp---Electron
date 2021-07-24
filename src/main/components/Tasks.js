import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { GetTasks } from '../services/tasks';
import { takeHeapSnapshot } from 'process';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { Table } from 'react-bootstrap';

export const Tasks = () => {
  useEffect(() => {
    setTasks(GetTasks());
    console.log(tasks);
  }, []);

  const [tasks, setTasks] = useState([]);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    // fucking abomination, but it works...
    if (result.source.droppableId !== result.destination.droppableId) {
      if (result.source.droppableId === 'table1') {
        const Searchfrom = Array.from(todoTasks);
        const items = Array.from(tasks);
        const foundItem = items.find(item=>item.id === Searchfrom[result.source.index].id);
        foundItem.status = 'compleated';
        setTasks(items);
      } else if (result.source.droppableId === 'table2') {
        const Searchfrom = Array.from(compleatedTasks);
        const items = Array.from(tasks);
        const foundItem = items.find(item=>item.id === Searchfrom[result.source.index].id);
        foundItem.status = 'todo';
        setTasks(items);
      }
    }
  }

  const compleatedTasks = [];
  const todoTasks = [];

  const getTasksByStatus = () => {
    tasks.map((task) => {
      if (task.status === 'compleated') {
        compleatedTasks.push(task);
      } else if (task.status === 'todo') {
        todoTasks.push(task);
      }
    });
  };

  return (
    <div className="Tasks">
      {getTasksByStatus()}
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Row>
          <Col span={11}>
            <Droppable droppableId="table1">
              {(provided) => (
                <Table
                  className="table1"
                  variant="dark"
                  {...provided.droppableProps}
                  ref={provided.innerRef} 
                >
                  <thead>
                    <tr>                     
                      <th>Task Name</th>
                      <th>Task Description</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {todoTasks.map((task, index) => (
                      <Draggable
                        key={'item-' + task.id}
                        draggableId={'item-' + task.id}
                        index={index}
                      >
                        {(provided) => (
                          <tr
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >                           
                            <td>{task.taskName}</td>
                            <td>{task.task}</td>
                            <td style={{minWidth: '3vh'}}>{task.status}</td>
                          </tr>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                    <tr style={{ height: '4vh' }}>
                      <td></td>
                      <td></td>
                      <td></td>                     
                    </tr>
                  </tbody>
                </Table>
              )}
            </Droppable>
          </Col>

          <Col span={2} />

          <Col span={11}>
            <Droppable droppableId="table2">
              {(provided) => (
                <Table
                  className="table2"
                  variant="dark"
                  {...provided.droppableProps}
                  ref={provided.innerRef}                  
                >
                  <thead>
                    <tr>                    
                      <th>Task Name</th>
                      <th>Task Description</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {compleatedTasks.map((task, index) => (
                      <Draggable
                        key={'item-' + task.id}
                        draggableId={'item-' + task.id}
                        index={index}
                      >
                        {(provided) => (
                          <tr
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >                           
                            <td>{task.taskName}</td>
                            <td>{task.task}</td>
                            <td style={{minWidth: '10vh'}}>{task.status}</td>
                          </tr>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                    <tr style={{ height: '4vh' }}>
                      <td></td>
                      <td></td>
                      <td></td>                     
                    </tr>
                  </tbody>
                </Table>
              )}
            </Droppable>
          </Col>
        </Row>
      </DragDropContext>
    </div>
  );
};
