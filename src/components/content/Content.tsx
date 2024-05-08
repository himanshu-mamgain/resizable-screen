import { useEffect, useState } from "react";
import axios from "axios";
import { CONSTANTS } from "../../constants/Constants";
import { toast } from "react-toastify";

export interface ContentProps {
  contentType: number;
}

const Content: React.FC<ContentProps> = ({ contentType }) => {
  const [content, setContent] = useState<string>("Random content");
  const [addFlag, setAddFlag] = useState(false);
  const [updateFlag, setUpdateFlag] = useState(false);

  async function fetchData() {
    const response = await axios.get(
      `${CONSTANTS.BASE_URL}/data/${contentType}`
    );

    if (response.data) {
      setContent(response.data.text);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleAdd() {
    setAddFlag(true);
  }

  async function handleSubmit() {
    try {
      const response = await axios.post(
        `${CONSTANTS.BASE_URL}/add-data/${contentType}`,
        {
          text: content,
        }
      );

      console.log(response);

      setAddFlag(false);

      toast.success(response.data.message);
    } catch (err: any) {
      toast.error(err?.message);
    }
  }

  async function handleUpdate() {
    setAddFlag(true);
    setUpdateFlag(true);
  }

  return (
    <div className="content-box">
      {addFlag ? (
        <input
          type="text"
          value={updateFlag ? content : ""}
          placeholder="Enter data here"
          onChange={(e) => setContent(e.target.value)}
        />
      ) : (
        <p className="content">{content}</p>
      )}
      {addFlag ? (
        <button onClick={() => handleSubmit()}>Submit</button>
      ) : (
        <>
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleUpdate}>Update</button>
        </>
      )}
    </div>
  );
};

export default Content;
