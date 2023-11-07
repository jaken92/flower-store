// import type {ActionFunctionArgs} from '@remix-run/node'; // or cloudflare/deno
// import {redirect} from '@remix-run/node'; // or cloudflare/deno

// Note the "action" export name, this will handle our form POST
export const action = async ({request}) => {
  const formData = await request.formData();
  const project = await createProject(formData);
  console.log(project);
  return Response.redirect(`/`);
};

export default function NewProject() {
  // ... same as before
}
