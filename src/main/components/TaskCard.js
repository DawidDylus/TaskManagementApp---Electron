import { Card, Col, Row } from 'antd';

export const TaskCard = ({ task = {}}) => {
  return (
    <Card
      type="inner"
      className="my-card"
      title={task.name}
      bordered={true}
      hoverable={true}
    >
      {task.description}
    </Card>
  );
};
