//@flow

// import type { ItemId, TreeItem } from '../src/types';

export default class TreeBuilder {
  constructor(rootId) {
    const rootItem = this._createItem(`${rootId}`);
    this.rootId = rootItem.id;
    this.items = {
      [rootItem.id]: rootItem,
    };
  }

  withLeaf(id) {
    const leafItem = this._createItem(`${this.rootId}-${id}`);
    this._addItemToRoot(leafItem.id);
    this.items[leafItem.id] = leafItem;
    return this;
  }

  withBatch(startID, count) {
    for (let id = startID; id <= count; id++) {
      const leafItem = this._createItem(`${this.rootId}-${id}`);
      this._addItemToRoot(leafItem.id);
      this.items[leafItem.id] = leafItem;
    }

    return this;
  }

  withSubTree(tree) {
    const subTree = tree.build();
    this._addItemToRoot(`${this.rootId}-${subTree.rootId}`);
    Object.keys(subTree.items).forEach(itemId => {
      const finalId = `${this.rootId}-${itemId}`;
      this.items[finalId] = {
        ...subTree.items[itemId],
        id: finalId,
        children: subTree.items[itemId].children.map(
          i => `${this.rootId}-${i}`,
        ),
      };
    });
    return this;
  }

  build() {
    return {
      rootId: this.rootId,
      items: this.items,
    };
  }

  _addItemToRoot(id) {
    const rootItem = this.items[this.rootId];
    rootItem.children.push(id);
    rootItem.isExpanded = true;
    rootItem.hasChildren = true;
  }

  _createItem = (id) => {
    return {
      id: `${id}`,
      children: [],
      hasChildren: false,
      isExpanded: false,
      isChildrenLoading: false,
      data: {
        title: `Title ${id}`,
      },
    };
  };
}