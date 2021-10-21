export default {
  type: "document",
  name: "messageTemplate",
  title: "Message Templates",
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
      title: 'Is this message sent as an SMS?',
      name: 'sms',
      type: 'boolean'
    },
    {
      type: "text",
      name: "subject",
      title: "Subject",
      hidden: ({ parent }) => parent?.sms
    },
    {
      type: "array",
      name: "body",
      title: "Body",
      of: [{ type: "block" }],
      hidden: ({ parent }) => parent?.sms
    },
    {
      type: "text",
      name: "text",
      title: "Text message",
      hidden: ({ parent }) => !parent?.sms
    },
  ],
};
