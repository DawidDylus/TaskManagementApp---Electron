import { Space } from 'antd';
import { TaskCard } from './TaskCard';
import { Draggable } from 'react-beautiful-dnd';

export const CardDeck = ({ TaskStatus = 'todo', tasks = []}) => {

  const RenderCard = ({ t, index }) => {    
    if (t.status !== TaskStatus) {
      return null;
    }

    return (
      <>
        <Draggable
          key={'item-' + t.id}
          draggableId={'item-' + t.id}
          index={index}
        >
          {(provided) => (
            <span
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <TaskCard task={t}/>
            </span>
          )}
        </Draggable>
      </>
    );
  };

  return (
    <Space >
      {tasks.map((task, index) => (
        <div key={task.id}>
          <RenderCard t={task} index={index} />
        </div>
      ))}
    </Space>
  );
};
