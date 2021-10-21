export const allTemplatesQuery = `*[_type == "messageTemplate"]`;
export const templateQuery = `*[_type == "messageTemplate" && slug.current == $slug][0]`;
