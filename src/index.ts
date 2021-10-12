export const allTemplatesQuery = `*[_type == "emailTemplate" && (!defined(namespace) || namespace == $namespace)]`;
export const templateQuery = `*[_type == "emailTemplate" && (!defined(namespace) || namespace == $namespace) && slug.current == $slug][0]`;
