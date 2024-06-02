// import React, { useState, useRef } from "react";
// import "react-quill/dist/quill.snow.css";
// import JoditEditor from "jodit-react";
// import styles from "./TextEditor.module.css";

// function TextEditor() {
//   const editor = useRef(null);
//   const [content, setContent] = useState("");

//   return (
//     <>
//       <div className={styles.editor}>
//         <JoditEditor
//           ref={editor}
//           value={content}
//           tabIndex={1}
//           onChange={(newContent) => setContent(newContent)}
//         />
//       </div>
//     </>
//   );
// }

// export default TextEditor;

import React, { useState, useRef, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import JoditEditor from "jodit-react";
import styles from "./TextEditor.module.css";

function TextEditor() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  // Load the content from localStorage when the component mounts
  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  // Save the content to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("editorContent", content);
  }, [content]);

  return (
    <>
      <div className={styles.editor}>
        <JoditEditor
          ref={editor}
          value={content}
          tabIndex={1}
          onChange={(newContent) => setContent(newContent)}
        />
      </div>
    </>
  );
}

export default TextEditor;
