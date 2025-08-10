import { create } from 'zustand';
import { Content, Element } from '@/types/editor'; // 作成した型定義をインポート

const MAX_HISTORY_LENGTH = 50;

export interface EditorState {
  siteData: Content | null;
  history: Content[];
  historyIndex: number;
  selectedElementId: string | null;
  setInitialData: (data: Content) => void;
  updateElementProps: (
    elementId: string,
    newProps: Partial<Element['props']>,
  ) => void;
  addElement: (element: Element) => void;
  deleteElement: (elementId: string) => void;
  moveElement: (dragIndex: number, hoverIndex: number) => void;
  selectElement: (elementId: string | null) => void;
  undo: () => void;
  redo: () => void;
}

export const useEditorStore = create<EditorState>((set, get) => ({
  siteData: null,
  history: [],
  historyIndex: -1,
  selectedElementId: null,

  setInitialData: (data) => {
    set({
      siteData: data,
      history: [data],
      historyIndex: 0,
      selectedElementId: null,
    });
  },

  // TODO: 各アクションのロジックを実装する
  updateElementProps: (elementId, newProps) => {
    //
  },
  addElement: (element) => {
    //
  },
  deleteElement: (elementId) => {
    //
  },
  moveElement: (dragIndex, hoverIndex) => {
    //
  },

  selectElement: (elementId) => {
    set({ selectedElementId: elementId });
  },

  undo: () => {
    //
  },
  redo: () => {
    //
  },
}));
