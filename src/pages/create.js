import "../customBlocks/customBlocks";
import React, { useState, useEffect } from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import toolboxConfig from "../toolbox.js"
import {workspaceRunner, workspaceEnvironment} from "../workspaceEnvironment"
import defaultWorkspace from "../defaultWorkspace";
import Lessons from "../Lessons";
import FilterNavigator from "../FilterNavigator";
import UploadImage from "../components/Core/UploadImage"
import BuiltInImageDropdown from "../components/Core/BuiltInImageDropdown";
import ImageHarness from "../components/Core/ImageHarness";

export default function Create() {
  const [xml, setXml] = useState("");
  const [loadedXml, setLoadedXml] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");
  const [workspace, setWorkspace] = useState(null);
  const [dirty, setDirty] = useState(false);
  const [filterLoading, setFilterLoading] = useState(true);

  useEffect(() => {
    document.body.parentElement.style.overflowY = "hidden";
    window.renderFinished = [() => setFilterLoading(false)];
  }, []);

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
    setDirty(false);
    workspace.clear();
    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(_xml), workspace)
  }

  function runCode(code) {
    setFilterLoading(true); 
    try {
      window.renderFinished = [() => setFilterLoading(false)];
      eval(code);
    } catch (e) {
      alert(e);
      //throw e;
    }    
  }

  return (
    <> 
      <div className="is-flex create">
        <div className="blockly-column is-flex is-flex-grow-1 is-flex-direction-column">
          <Lessons setXml={loadXml} />
          <FilterNavigator
            xml={xml}
            setXml={loadXml}
            dirty={dirty}
          ></FilterNavigator>
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
        </div>
        <div className="preview-column is-flex is-flex-direction-column pt-1">
          {/* <textarea
            id="code"
            style={{ height: "200px", width: "400px" }}
            value={javascriptCode}
            readOnly
          ></textarea>
          <button className="button" onClick={() => {navigator.clipboard.writeText(JSON.stringify({xml: xml}))}}>Copy Filter JSON</button>  */}
          <ImageHarness
            loading={filterLoading}
            showRunButton
            onRunClick={() => {runCode(javascriptCode)}}
          ></ImageHarness>
        </div>
        
        
      
        
        {/* <pre id="generated-xml">{xml}</pre> */}
        </div>
    </>
  );
}

