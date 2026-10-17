import { describe, it, expect } from 'vitest';
import { journeyPhases, profileInfo, skillCategories } from '@/data/journeyData';

describe('Journey Data Structure & Content Integrity', () => {
  it('contains exactly 6 chronological phases', () => {
    expect(journeyPhases).toHaveLength(6);
    expect(journeyPhases.map((p) => p.id)).toEqual([
      'phase-1',
      'phase-2',
      'phase-3',
      'phase-4',
      'phase-5',
      'phase-6',
    ]);
  });

  it('validates each phase contains essential properties', () => {
    journeyPhases.forEach((phase) => {
      expect(phase.title).toBeTruthy();
      expect(phase.company).toBeTruthy();
      expect(phase.role).toBeTruthy();
      expect(phase.period).toBeTruthy();
      expect(phase.overview).toBeTruthy();
      expect(phase.techStack.length).toBeGreaterThan(0);
      expect(phase.metrics.length).toBeGreaterThan(0);
      expect(phase.challenges.length).toBeGreaterThan(0);
      expect(phase.themeColor.primary).toMatch(/^#[0-9a-fA-F]{6}$/);
      expect(phase.themeColor.accent).toMatch(/^#[0-9a-fA-F]{6}$/);
    });
  });

  it('validates Phase 06 has AI Engineering content, CMP, and Next Journey navTitle', () => {
    const phase6 = journeyPhases[5];
    expect(phase6.id).toBe('phase-6');
    expect(phase6.phaseNumber).toBe(6);
    expect(phase6.navTitle).toBe('Next Journey');
    expect(phase6.role).toContain('AI');
    expect(phase6.techStack.some((t) => t.includes('Compose Multiplatform'))).toBe(true);
    expect(phase6.techStack).toContain('Claude Code');
    expect(phase6.techStack.some((t) => t.includes('Antigravity'))).toBe(true);

    // Overview or summary should reference RM Satu Tools and agentic workflows
    const fullText = `${phase6.shortSummary} ${phase6.overview} ${phase6.keyResponsibilities.join(' ')}`;
    expect(fullText.toLowerCase()).toContain('rm satu');
    expect(fullText.toLowerCase()).toContain('multiplatform');
  });

  it('validates profileInfo has authentic social links and email', () => {
    expect(profileInfo.name).toBe('Rakai Wangsasatia');
    expect(profileInfo.avatarUrl).toBe('/images/profile/rakai_avatar.webp');

    const githubLink = profileInfo.socialLinks.find((s) => s.label.toLowerCase().includes('github'));
    const linkedinLink = profileInfo.socialLinks.find((s) => s.label.toLowerCase().includes('linkedin'));
    const emailLink = profileInfo.socialLinks.find((s) => s.label.toLowerCase().includes('email'));

    expect(githubLink?.url).toBe('https://github.com/rakai77');
    expect(linkedinLink?.url).toBe('https://www.linkedin.com/in/rakai-wangsasatia');
    expect(emailLink?.url).toBe('mailto:rakai77.rr@gmail.com');
  });

  it('validates profile stats contain Banking & Finance and IT Consultant', () => {
    const statLabels = profileInfo.stats.map((s) => s.label.toLowerCase());
    expect(statLabels.some((l) => l.includes('finance') || l.includes('banking'))).toBe(true);
    expect(statLabels.some((l) => l.includes('consultant'))).toBe(true);
    expect(profileInfo.stats).toHaveLength(5);
  });

  it('validates skillCategories includes required mobile engineering skills', () => {
    const mobileCat = skillCategories.find((c) => c.category.toLowerCase().includes('mobile'));
    expect(mobileCat).toBeDefined();

    const skillNames = mobileCat?.skills.map((s) => s.name.toLowerCase()) || [];
    expect(skillNames).toContain('ios');
    expect(skillNames).toContain('swiftui');
    expect(skillNames).toContain('flutter');
    expect(skillNames).toContain('xamarin');
    expect(skillNames.some((s) => s.includes('website builder'))).toBe(true);
  });
});
