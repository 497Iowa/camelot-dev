import React, { useState, useEffect } from "react";
import ImageHarness from '../components/Core/ImageHarness';
import FilterSelector from '../components/Filters/FilterSelector';
import {workspaceRunnerPersist, workspaceEnvironment} from "../workspaceEnvironment"
import Blockly from "blockly";

const Filters = () => {

  const [workspace, setWorkspace] = useState(null);

  useEffect(() => {
    var ws = new Blockly.Workspace();
    setWorkspace(ws);
  }, []);

  const applyFilter = (xml) => {
    workspace.clear();
    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace)
    const code = workspaceEnvironment + Blockly.JavaScript.workspaceToCode(workspace) + workspaceRunnerPersist;
    try {
      eval(code);
    } catch (e) {
      alert(e);
      //throw e;
    }  
  }

  return (
    <div className="container filter-container">
      <ImageHarness/>
      <FilterSelector
        setXml={applyFilter}
      ></FilterSelector>
    </div>
  );
};

export default Filters;
