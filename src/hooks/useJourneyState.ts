import React from 'react';

type Listener = () => void;

export type SlideType = 'intro' | 'detail' | 'contact';

export interface JourneyState {
  activePhaseIndex: number;
  activeSlideId: string;
  activeSlideType: SlideType;
  selectedScreenshots: Record<number, string>;
}

let state: JourneyState = {
  activePhaseIndex: 0,
  activeSlideId: 'slide-phase-0-intro',
  activeSlideType: 'intro',
  selectedScreenshots: {},
};

const listeners = new Set<Listener>();

export const journeyStore = {
  getState: (): JourneyState => state,

  setActiveSlide: (phaseIndex: number, slideId: string, slideType: SlideType) => {
    if (
      state.activePhaseIndex === phaseIndex &&
      state.activeSlideId === slideId &&
      state.activeSlideType === slideType
    ) {
      return;
    }
    state = {
      ...state,
      activePhaseIndex: phaseIndex,
      activeSlideId: slideId,
      activeSlideType: slideType,
    };
    listeners.forEach((listener) => listener());
  },

  setPhaseScreenshot: (phaseIndex: number, url: string) => {
    if (state.selectedScreenshots[phaseIndex] === url) return;
    state = {
      ...state,
      selectedScreenshots: {
        ...state.selectedScreenshots,
        [phaseIndex]: url,
      },
    };
    listeners.forEach((listener) => listener());
  },

  scrollToSlide: (slideId: string) => {
    const el = document.getElementById(slideId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  },

  subscribe: (listener: Listener) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
};

export const useJourneyState = (): JourneyState => {
  return React.useSyncExternalStore(journeyStore.subscribe, journeyStore.getState);
};
