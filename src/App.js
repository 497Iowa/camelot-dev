import "./App.css";
import "./customBlocks/custom_Blocks";
import React, { useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import ImagePreview from "./ImagePreview"
import toolboxConfig from "./toolbox.js"
import {workspaceRunner, workspaceEnvironment} from "./workspaceEnvironment"
import defaultWorkspace from "./defaultWorkspace";

export default function App() {
  const [xml, setXml] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");

  const oldXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';
  const initialXml = defaultWorkspace;
    //'<xml xmlns="https://developers.google.com/blockly/xml" id="workspaceBlocks" style="display: none"></xml>';

  const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Logic",
        colour: "#5C81A6",
        contents: [
          {
            kind: "block",
            type: "controls_if",
          },
          {
            kind: "block",
            type: "logic_compare",
          },
        ],
      },
      {
        kind: "category",
        name: "Math",
        colour: "#5CA65C",
        contents: [
          {
            kind: "block",
            type: "math_round",
          },
          {
            kind: "block",
            type: "math_number",
          },
        ],
      },
      {
        kind: "category",
        name: "Custom",
        colour: "#5CA699",
        contents: [
          {
            kind: "block",
            type: "new_boundary_function",
          },
          {
            kind: "block",
            type: "return",
          },
        ],
      },
    ],
  };
  function workspaceDidChange(workspace) {
    Blockly.JavaScript.addReservedWords("image");
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if(--window.LoopTrap == 0) throw "Infinite loop.";\n';
    const code = workspaceEnvironment + Blockly.JavaScript.workspaceToCode(workspace) + workspaceRunner;
    setJavascriptCode(code);
  }

  function runCode(code) {
    try {
      eval(code);
    } catch (e) {
      alert(e);
      //throw e;
    }    
  }

  return (
    <>
      <textarea
        id="code"
        style={{ height: "200px", width: "400px" }}
        value={javascriptCode}
        readOnly
      ></textarea>
      <button onClick={() => runCode(javascriptCode)}>Run Code</button>
      <canvas id="test-canvas"></canvas>
      {/* <ImagePreview code={javascriptCode}></ImagePreview> */}
      
      <BlocklyWorkspace
        toolboxConfiguration={Blockly.utils.toolbox.convertToolboxDefToJson(toolboxConfig)}
        initialXml={initialXml}
        className="fill-height"
        workspaceConfiguration={{
          // toolbox : toolbox, 
          collapse : true, 
          comments : true, 
          disable : true, 
          maxBlocks : Infinity, 
          trashcan : true, 
          horizontalLayout : true, 
          toolboxPosition : 'start', 
          css : true, 
          media : 'https://blockly-demo.appspot.com/static/media/', 
          rtl : false, 
          scrollbars : false, 
          sounds : true, 
          oneBasedIndex : true
        }}
        onWorkspaceChange={workspaceDidChange}
        onXmlChange={setXml}
      />
      <pre id="generated-xml">{xml}</pre>

    </>
  );
}
