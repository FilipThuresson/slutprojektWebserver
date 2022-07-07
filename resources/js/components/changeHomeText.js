import React, {useState} from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function ChangeHomeText() {

    const [editorState, setEditorState] = useState();

    const onEditorStateChange = (stateChange) => {
        setEditorState(stateChange);
    }

    return (<>
        <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
        />
    </>);
}
