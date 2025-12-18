const rules = {
  'hungarian-notation-for-descriptive-patterns': {
    meta: {
      type: 'suggestion',
      docs: {
        description: 'Ensure that all interfaces begin with I, and all types begin with T.',
      },
      schema: [],
    },
    create(context) {
      return {
        TSInterfaceDeclaration(node) {
          const name = node.id.name;
          if (!name.startsWith('I')) {
            context.report({
              node: node.id,
              message: 'The interface name "{{name}}" must begin with "I".',
              data: {
                name,
              },
            });
          }
        },
        TSTypeAliasDeclaration(node) {
          const name = node.id.name;
          if (!name.startsWith('T')) {
            context.report({
              node: node.id,
              message: 'The type name "{{name}}" must begin with "T"',
              data: {
                name,
              },
            });
          }
        },
      };
    },
  },
};

export default rules;
