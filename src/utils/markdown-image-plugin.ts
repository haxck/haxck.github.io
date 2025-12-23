import { visit } from 'unist-util-visit';
import type { Node } from 'unist';
import type { Image } from 'mdast';

interface ImageNode extends Image {
  type: 'image';
  data?: {
    hProperties?: {
      src?: string;
      alt?: string;
      title?: string;
    };
  };
}

export function remarkImageModal() {
  return (tree: Node) => {
    visit(tree, 'image', (node: ImageNode, index, parent) => {
      // Create a new node that will be rendered as ImageModal component
      const imageNode = {
        type: 'html',
        value: `<ImageModal src="${node.url}" alt="${node.alt || ''}" caption="${node.title || ''}" />`
      };
      
      // Replace the image node with our custom HTML
      if (parent && typeof index === 'number') {
        parent.children?.splice(index, 1, imageNode);
      }
    });
  };
}