export default {
  type: "document",
  name: "emailTemplate",
  title: "Email Templates",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
    {
      type: "string",
      name: "namespace",
      title: "Namespace",
      description: "To keep things organized. Keep empty if you do not need it",
    },
    {
      type: "array",
      name: "subject",
      title: "Subject",
      of: [{ type: "block" }],
    },
    {
      type: "array",
      name: "body",
      title: "Body",
      of: [{ type: "block" }],
    },
  ],
};
