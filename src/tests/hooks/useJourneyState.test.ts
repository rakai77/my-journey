import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useJourneyState, journeyStore } from '@/hooks/useJourneyState';

describe('useJourneyState & journeyStore', () => {
  beforeEach(() => {
    act(() => {
      journeyStore.setActiveSlide(0, 'slide-phase-0-intro', 'intro');
    });
  });

  it('initializes with default state', () => {
    const { result } = renderHook(() => useJourneyState());
    expect(result.current.activePhaseIndex).toBe(0);
    expect(result.current.activeSlideType).toBe('intro');
  });

  it('updates state when setActiveSlide is called', () => {
    const { result } = renderHook(() => useJourneyState());

    act(() => {
      journeyStore.setActiveSlide(3, 'slide-phase-3-detail', 'detail');
    });

    expect(result.current.activePhaseIndex).toBe(3);
    expect(result.current.activeSlideId).toBe('slide-phase-3-detail');
    expect(result.current.activeSlideType).toBe('detail');
  });

  it('sets and remembers custom phase screenshot', () => {
    const { result } = renderHook(() => useJourneyState());

    act(() => {
      journeyStore.setPhaseScreenshot(2, '/images/screenshots/custom.webp');
    });

    expect(result.current.selectedScreenshots[2]).toBe('/images/screenshots/custom.webp');
  });

  it('calls scrollIntoView when scrollToSlide is invoked', () => {
    const dummyDiv = document.createElement('div');
    dummyDiv.id = 'target-slide';
    dummyDiv.scrollIntoView = vi.fn();
    document.body.appendChild(dummyDiv);

    journeyStore.scrollToSlide('target-slide');
    expect(dummyDiv.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

    document.body.removeChild(dummyDiv);
  });
});
