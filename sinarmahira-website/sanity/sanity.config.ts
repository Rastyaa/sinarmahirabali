import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'biosmb CMS',
  projectId: 'your_project_id', // TODO: replace with actual project ID
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
