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
      type: "text",
      name: "subject",
      title: "Subject"
    },
    {
      type: "array",
      name: "body",
      title: "Body",
      of: [{ type: "block" }],
    },
  ],
};