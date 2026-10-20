export type ProjectStatus = "ongoing" | "completed" | "pilot";

export type Project = {
  id: string;
  title: string;
  status: ProjectStatus;
  description: string;
};
