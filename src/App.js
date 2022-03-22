import "./App.css";
import "./customBlocks/customBlocks";
import React, { useState, useEffect } from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import ImagePreview from "./ImagePreview"
import toolboxConfig from "./toolbox.js"
import {workspaceRunner, workspaceEnvironment} from "./workspaceEnvironment"
import defaultWorkspace from "./defaultWorkspace";
import Lessons from "./Lessons";
import LoadFilter from "./LoadFilter";
import SaveFilter from "./SaveFilter";
import FilterNavigator from "./FilterNavigator";

export default function App() {
  const [xml, setXml] = useState("");
  const [loadedXml, setLoadedXml] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");
  const [workspace, setWorkspace] = useState(null);
  const [dirty, setDirty] = useState(false);

  function workspaceDidChange(_workspace) {
    if (workspace === null) setWorkspace(_workspace);
    
    // Blockly.JavaScript.addReservedWords("image");
    // window.LoopTrap = 1000;
    // Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if(--window.LoopTrap == 0) throw "Infinite loop.";\n';
    const code = workspaceEnvironment + Blockly.JavaScript.workspaceToCode(_workspace) + workspaceRunner;
    setJavascriptCode(code);
  }

  const onXmlChange = (_xml) => {
    setDirty(loadedXml !== "" && xml !== loadedXml);
    setXml(_xml);
  }

  const loadXml = (_xml) => {
    setXml(_xml);
    setLoadedXml(_xml);
    workspace.clear();
    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(_xml), workspace)

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
      <Lessons />
      <textarea
        id="code"
        style={{ height: "200px", width: "400px" }}
        value={javascriptCode}
        readOnly
      ></textarea>
      <button className="button" onClick={() => runCode(javascriptCode)}>Run Code</button>
      <canvas id="test-canvas"></canvas>
      {/* <SaveFilter></SaveFilter>
      <LoadFilter></LoadFilter> */}
      <FilterNavigator
        xml={xml}
        setXml={loadXml}
        dirty={dirty}
      ></FilterNavigator>
      {/* <ImagePreview code={javascriptCode}></ImagePreview> */}
      
      <BlocklyWorkspace
        toolboxConfiguration={Blockly.utils.toolbox.convertToolboxDefToJson(toolboxConfig)}
        initialXml={defaultWorkspace}
        className="fill-height"
        workspaceConfiguration={{
          collapse : true, 
          comments : true, 
          disable : true, 
          maxBlocks : Infinity, 
          grid: {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: false
          },
          renderer: 'thrasos',
          theme: {
            'base': 'classic',
            'componentStyles': {
              'toolboxBackgroundColour': '#e6e9ef',
              'flyoutBackgroundColour': '#d2d2d2'
            },
            'fontStyle': {
              "family": "Fredoka, sans-serif",
              "size": 12
            },
          },
          trashcan : true, 
          horizontalLayout : false, 
          toolboxPosition : 'start', 
          css : true, 
          media : 'https://blockly-demo.appspot.com/static/media/', 
          rtl : false, 
          scrollbars : false, 
          sounds : true, 
          oneBasedIndex : true
        }}
        onWorkspaceChange={workspaceDidChange}
        onXmlChange={onXmlChange}
      />
      {/* <pre id="generated-xml">{xml}</pre> */}

    </>
  );
}