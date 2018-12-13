import {
    defineWidget,
    log,
    runCallback,
    findElement,
} from 'widget-base-helpers';

//import domClass from 'dojo/dom-class';
import query from 'dojo/query';
import aspect from 'dojo/aspect';
import construct from 'dojo/dom-construct';
import registry from 'dijit/registry';

export default defineWidget('CellHtml', false, {

    _obj: null,
    _grid: null,

    constructor() {
        this.log = log.bind(this);
        this.runCallback = runCallback.bind(this);
    },

    postCreate() {
        log.call(this, 'postCreate', this._WIDGET_VERSION);
    },

    update(obj, callback) {
        if (obj) {
            this._contextObj = obj;
        }

        this._gridNode = findElement(".mx-name-" + this.gridName, this.domNode.parentNode);
        this._grid = registry.byNode(this._gridNode);
        aspect.after(this._grid, "refreshGrid", this._applyHtml.bind(this));

        if(callback) {callback();}
    },
    _applyHtml() {
        let col, rowObj;
        for (rowObj of this._grid._dataSource._pageObjs) {
            const rowId = this._grid.getRowForMxObject(rowObj);
            const rowNode = this._grid._gridRowNodes[ rowId ];
            for (col of this.columns) {
                const nodeToApply = col.columnName ? query(".mx-name-" + col.columnName, rowNode)[ 0 ] : null;
                this._handleResults(col.html, nodeToApply, col, rowObj);
            }
        }
    },
    _evalNanoFlow(nanoflow, obj, callback) {
        const context = new mendix.lib.MxContext();
        context.setTrackObject(obj);
        window.mx.data.callNanoflow({
            nanoflow: nanoflow,
            context: context,
            origin: this.mxform,
            callback: callback,
            error: function(){console.error("Unable to execute rule nanoflow");},
        });
    },

    _handleResults(html, nodeToApply, column, rowObj) {
        //let newNode;
        let param, htmlStr;
        if (!nodeToApply || !rowObj) {
            return;
        }

        if (html) {
            for (param of this.params) {
                htmlStr = html.split("${" + param.name + "}").join(rowObj.get(param.valueAttr));
            }
            const nodeToRemove = query("." + column.columnName + "-html", nodeToApply)[ 0 ];
            if (nodeToRemove) {
                construct.destroy(nodeToRemove);
            }
            construct.create("div", { innerHTML: htmlStr, className: column.columnName + '-html' }, nodeToApply, column.position);
        }
    },
});
