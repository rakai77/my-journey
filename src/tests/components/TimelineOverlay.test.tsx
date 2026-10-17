import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TimelineOverlay } from '@/components/2d/TimelineOverlay';
import { journeyStore } from '@/hooks/useJourneyState';
import { journeyPhases } from '@/data/journeyData';

describe('TimelineOverlay Component Tests', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('renders top navbar brand with Rakai Wangsasatia and avatar', () => {
    render(<TimelineOverlay />);
    expect(screen.getAllByText('Rakai Wangsasatia').length).toBeGreaterThan(0);
    expect(screen.getByText('Mobile & AI Portfolio')).toBeInTheDocument();

    const avatarImages = screen.getAllByRole('img');
    const profileAvatar = avatarImages.find((img) => 
      img.getAttribute('src')?.includes('rakai_avatar.webp')
    );
    expect(profileAvatar).toBeDefined();
  });

  it('renders all phase navigation items in top bar including 06 Next Journey', () => {
    render(<TimelineOverlay />);
    
    // Check that phase 06 displays Next Journey
    const nextJourneyBtn = screen.getByRole('button', { name: /Next Journey/i });
    expect(nextJourneyBtn).toBeInTheDocument();

    // Check that buttons exist for each phase
    journeyPhases.forEach((phase) => {
      const titleToFind = phase.navTitle || phase.company;
      expect(
        screen.getByRole('button', {
          name: (_content, element) =>
            element?.textContent?.includes(titleToFind) ?? false,
        })
      ).toBeInTheDocument();
    });
  });

  it('triggers scrollToSlide when clicking a phase navigation button', () => {
    const scrollSpy = vi.spyOn(journeyStore, 'scrollToSlide').mockImplementation(() => {});
    render(<TimelineOverlay />);

    const nextJourneyBtn = screen.getByRole('button', { name: /Next Journey/i });
    fireEvent.click(nextJourneyBtn);

    expect(scrollSpy).toHaveBeenCalledWith('slide-phase-5-intro');
  });

  it('renders Contact slide with social links and email', () => {
    render(<TimelineOverlay />);
    
    const links = screen.getAllByRole('link');
    const githubLink = links.find((l) => l.getAttribute('href') === 'https://github.com/rakai77');
    const linkedinLink = links.find((l) => l.getAttribute('href') === 'https://www.linkedin.com/in/rakai-wangsasatia');
    const emailLink = links.find((l) => l.getAttribute('href') === 'mailto:rakai77.rr@gmail.com');

    expect(githubLink).toBeDefined();
    expect(linkedinLink).toBeDefined();
    expect(emailLink).toBeDefined();
  });

  it('renders mobile skills and finance & banking experience in Contact slide', () => {
    render(<TimelineOverlay />);

    // Mobile skills (may appear in skills list or tags)
    expect(screen.getAllByText('iOS').length).toBeGreaterThan(0);
    expect(screen.getAllByText('SwiftUI').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Flutter').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Xamarin').length).toBeGreaterThan(0);

    // Experience badges
    expect(screen.getAllByText(/Banking & Finance/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/IT Consultant/i).length).toBeGreaterThan(0);
  });
});
