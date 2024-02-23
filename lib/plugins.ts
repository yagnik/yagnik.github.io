export function titleExtractPlugin(pluginData) {
  const extract = (tree, kind, remove) => {
    let node = tree.children[0]
    if (node.type !== kind) {
      return
    }
    if (remove) {
      tree.children.shift()
    }
    if (node.children) {
      return node.children[0].value
    }
  }

  return (tree) => {
    if (!(tree.children && tree.children.length > 2 && tree.children[2].type === 'thematicBreak')) {
      return
    }

    pluginData.title = extract(tree, 'heading', true)
    pluginData.subTitle = extract(tree, 'paragraph', true)
    extract(tree, 'thematicBreak', true)
  }
}

export function headingsExtractPlugin(pluginData) {
  return (tree) => {
    pluginData.headings = tree.children
      .filter((node) => node.type === 'element' && node.tagName.startsWith('h'))
      .map((node) => ({
        label: node.children[0].value,
        level: parseInt(node.tagName.split('').pop()),
        href: `#${node.properties.id}`,
      }))
  }
}

export function removePostWipTagPlugin() {
  return (tree) => {
    let position = tree.children.findIndex((node) => node.type === 'mdxJsxFlowElement' && node.name === 'WIP')
    if (position > -1) {
      tree.children.splice(position + 1, Infinity)
    }
  }
}
