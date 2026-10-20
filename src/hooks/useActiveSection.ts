import * as React from "react";

export function useActiveSection(sectionIds: string[], isEnabled = true) {
  const [activeSectionId, setActiveSectionId] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!isEnabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSectionId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds, isEnabled]);

  return activeSectionId;
}
