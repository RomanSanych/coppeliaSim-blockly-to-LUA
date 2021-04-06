// If worspace was changed
    function updateCode(event) {
      if (event.type == 
        Blockly.Events.CLICK ||
        Blockly.Events.SELECT ||
        Blockly.Events.BLOCK_DRAG ||
        Blockly.Events.MARKER_MOVE ||
        Blockly.Events.BUBBLE_OPEN ||
        Blockly.Events.TRASHCAN_OPEN ||
        Blockly.Events.TOOLBOX_ITEM_SELECT ||
        Blockly.Events.THEME_CHANGE ||
        Blockly.Events.VIEWPORT_CHANGE ||
        Blockly.Events.BLOCK_CREATE ||
        Blockly.Events.BLOCK_DELETE ||
        Blockly.Events.BLOCK_CHANGE ||
        Blockly.Events.BLOCK_MOVE ||
        Blockly.Events.COMMENT_CREATE ||
        Blockly.Events.COMMENT_DELETE ||
        Blockly.Events.COMMENT_CHANGE ||
        Blockly.Events.COMMENT_MOVE ||
        Blockly.Events.VAR_CREATE ||
        Blockly.Events.VAR_DELETE ||
        Blockly.Events.VAR_RENAME ||
        Blockly.Events.FINISHED_LOADING)
        {
          //insert lua code to textarea
          Blockly.Lua.INFINITE_LOOP_TRAP = null;
          var code = Blockly.Lua.workspaceToCode(workspace);
          document.getElementById('textarea').innerHTML = code;
          //alert(code);
        }
    }

    workspace.addChangeListener(updateCode);