import { TaskCard } from './TaskCard';
import { GetTasks } from '../services/tasks';
import React, { useEffect, useState } from 'react';
import { Layout, Menu, Col, Row } from 'antd';
import { CardDeck } from './CardDeck';
const { Header, Content } = Layout;
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(GetTasks());
  }, []);

  function handleOnDragEnd(result) {
    console.log(result);
    if (!result.destination) return;

    const items = Array.from(tasks);
    if (result.source.droppableId !== result.destination.droppableId) {
      if (result.source.droppableId === 'Area1') {
        const DraggedItem = items[result.source.index];
        DraggedItem.status = 'completed';
       
      } else if (result.source.droppableId === 'Area2') {
        const DraggedItem = items[result.source.index];
        DraggedItem.status = 'todo';
        
      }
    }
    setTasks(items);
  }

  return (
    <div className="Home">
      <Layout style={{ height: '100vh' }}>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Task List</Menu.Item>
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: '0 50px', marginTop: 64 }}
        >
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Row>
              <Droppable droppableId="Area1">
                {(provided) => (
                  <Col
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    span={12}
                    className="drop"
                    style={{
                      borderRight: '1px solid black',
                      borderBottom: '1px solid black',
                      paddingRight: '3vh',
                    }}
                  >
                    <h1 style={{ textAlign: 'center' }}>TODO</h1>
                    <div
                      className="site-layout-background"
                      style={{ padding: 24, minHeight: 380 }}
                    >
                      <CardDeck TaskStatus="todo" tasks={tasks} />
                      {provided.placeholder}
                    </div>
                  </Col>
                )}
              </Droppable>
              <Droppable droppableId="Area2">
                {(provided) => (
                  <Col
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    span={12}
                    className="drop"
                    style={{
                      borderLeft: '1px solid black',
                      borderBottom: '1px solid black',
                      paddingLeft: '3vh',
                    }}
                  >
                    <h1 style={{ textAlign: 'center' }}>Completed</h1>
                    <CardDeck TaskStatus="completed" tasks={tasks} />
                    {provided.placeholder}
                  </Col>
                )}
              </Droppable>
            </Row>
          </DragDropContext>
        </Content>       
      </Layout>
    </div>
  );
};
