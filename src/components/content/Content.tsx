import { useEffect, useState } from "react";
import axios from "axios";
import { CONSTANTS } from "../../constants/Constants";
import { toast } from "react-toastify";

import "./content.style.css";

export interface ContentProps {
  contentType: number;
}

const Content: React.FC<ContentProps> = ({ contentType }) => {
  const [content, setContent] = useState<string>("Random content");
  const [flag, setFlag] = useState<boolean>(false);
  const [showValue, setShowValue] = useState<null | boolean>(null);
  const [count, setCount] = useState({
    addCount: 0,
    updateCount: 0,
  });

  async function fetchData() {
    try {
      const response = await axios.get(
        `${CONSTANTS.BASE_URL}/data/${contentType}`
      );

      if (response.data) {
        setContent(response.data.text);
        setCount({
          addCount: response.data.add_count,
          updateCount: response.data.update_count,
        });
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function hanldeToggle(type: string) {
    if (type === "update") {
      setShowValue(true);
    }
    setFlag(true);
  }

  async function handleSubmit() {
    try {
      let response: any;

      if (showValue) {
        response = await axios.post(
          `${CONSTANTS.BASE_URL}/update-data/${contentType}`,
          {
            text: content,
          }
        );
      } else {
        response = await axios.post(
          `${CONSTANTS.BASE_URL}/add-data/${contentType}`,
          {
            text: content,
          }
        );
      }

      setFlag(false);
      fetchData();
      toast.success(response.data.message);
    } catch (err: any) {
      toast.error(err?.message);
    }
  }

  return (
    <div className="content-box">
      {flag ? (
        <input
          type="text"
          value={content}
          placeholder="Enter data here"
          onChange={(e) => setContent(e.target.value)}
        />
      ) : (
        <p className="content">{content}</p>
      )}
      {flag ? (
        <div className="btn-container">
          <button onClick={() => handleSubmit()}>Submit</button>
          <button onClick={() => setFlag(false)}>Cancel</button>
        </div>
      ) : (
        <div className="btn-container">
          <button onClick={() => hanldeToggle("add")}>Add</button>
          <button onClick={() => hanldeToggle("update")}>Update</button>
        </div>
      )}
      <div className="cnt-container">
        <p>Add count: {count.addCount}</p>
        <p>Update count: {count.updateCount}</p>
      </div>
    </div>
  );
};

export default Content;
