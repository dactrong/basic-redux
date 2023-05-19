/* eslint-disable array-callback-return */
import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todosRemainingSelector } from "../../redux/selector";
import todoListSlice from "./slice";
export default function TodoList() {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [value, setValue] = useState("Medium");

  const handleAddButtonClick = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: data,
        completed: false,
        priority: value,
      })
    );
    setData("");
    setValue("");
  };
  const todoList = useSelector(todosRemainingSelector);
  // const searchText = useSelector(searchSelector)
  const handleOnChange = (e) => {
    setData(e.target.value);
  };
  const handleOnValue = (value) => {
    setValue(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList?.map((item) => (
          <Todo
            key={item.id}
            id={item.id}
            name={item.name}
            prioriry={item?.priority}
            completed={item.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={data} onChange={handleOnChange} />
          <Select defaultValue="Medium" value={value} onChange={handleOnValue}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
