import React, { useState, useEffect } from "react";
import ImageHarness from '../components/Core/ImageHarness';
import FilterSelector from '../components/Filters/FilterSelector';
import {workspaceRunnerPersist, workspaceEnvironment} from "../workspaceEnvironment"
import Blockly from "blockly";

const Filters = () => {

  const [workspace, setWorkspace] = useState(null);
  const [filterLoading, setFilterLoading] = useState(true);

  useEffect(() => {
    var ws = new Blockly.Workspace();
    setWorkspace(ws);
    window.renderFinished = [() => setFilterLoading(false)];
  }, []);

  const applyFilter = (xml, onFinish = null) => {
    workspace.clear();
    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace)
    const code = workspaceEnvironment + Blockly.JavaScript.workspaceToCode(workspace) + workspaceRunnerPersist;
    try {
      if (onFinish !== null) {
        window.renderFinished = [onFinish, () => setFilterLoading(false)]
      }
      setFilterLoading(true);
      let ret = eval(code);
    } catch (e) {
      alert(e);
      //throw e;
    }  
  }

  return (
    <div className="container filter-container">
      <ImageHarness loading={filterLoading}/>
      <FilterSelector
        setXml={applyFilter}
        filterLoading={filterLoading}
      ></FilterSelector>
    </div>
  );
};

export default Filters;
