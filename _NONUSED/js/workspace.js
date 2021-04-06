/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
var toolbox = document.getElementById("toolbox");

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
		maxScale : 2, 
		minScale : 0.5, 
		scaleSpeed : 0.1
	}
};

/* Inject your workspace */ 
var workspace = Blockly.inject('blocklyDiv', options);

/* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */

/* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
var workspaceBlocks = document.getElementById("toolbox"); 

/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
          //Blockly.Lua.INFINITE_LOOP_TRAP = null;
          var code = Blockly.Lua.workspaceToCode(workspace);
          document.getElementById('textarea').innerHTML = code;
          //alert(code);
        }
    }

    workspace.addChangeListener(myUpdateFunction);