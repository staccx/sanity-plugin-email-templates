export const allTemplatesQuery = `*[_type == "emailTemplate"]`;
export const templateQuery = `*[_type == "emailTemplate" && slug.current == $slug][0]`;
