var blocklyDiv = document.getElementById('blocklyDiv');
var tools = document.getElementById('toolbox');

var options = { 
    toolbox : toolbox, 
    collapse : true, 
    comments : true, 
    disable : true, 
    maxBlocks : Infinity, 
    trashcan : true, 
    horizontalLayout : false, 
    toolboxPosition : 'start', 
    css : true, 
    media : 'https://blockly-demo.appspot.com/static/media/', 
    rtl : false, 
    scrollbars : true, 
    sounds : true, 
    oneBasedIndex : true, 
    grid : {
        spacing : 20, 
        length : 1, 
        colour : '#888', 
        snap : false
    }, 
    zoom : {
        controls : true, 
        wheel : true, 
        startScale : 1, 
        maxScale : 3, 
        minScale : 0.3, 
        scaleSpeed : 1.2
    }
};

var workspace = Blockly.inject(blocklyDiv,options);



    function myFunction() {
        var copyText = document.getElementById("textarea");
        copyText.select();
        alert(123);
        document.execCommand("copy");
    }

    // If worspace was changed
    function myUpdateFunction(event) {
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

    workspace.addChangeListener(myUpdateFunction);