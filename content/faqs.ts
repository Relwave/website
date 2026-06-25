export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "Which databases are supported?",
    answer:
      "RelWave currently supports PostgreSQL, MySQL, MariaDB, and SQLite. Additional database support may be added in future releases."
  },
  {
    question: "Does RelWave store my database data?",
    answer:
      "No. RelWave is a local-first desktop application. Your database connections communicate directly between your machine and your database. We do not store your database contents on our servers."
  },
  {
    question: "What makes the Git integration unique?",
    answer:
      "RelWave brings Git-style workflows to schema management. Track changes, generate migrations, review modifications, and maintain versioned database workflows alongside your application code."
  },
  {
    question: "Does RelWave support SSH tunnels?",
    answer:
      "Yes. RelWave supports SSH tunneling for securely connecting to databases hosted in private networks or cloud environments."
  },
  {
    question: "Is RelWave open source?",
    answer:
      "Yes. RelWave is open source and available on GitHub, allowing developers to inspect the codebase, contribute improvements, and self-host builds if desired."
  },
  {
    question: "Does RelWave work offline?",
    answer:
      "Most features work entirely offline. Internet access is only required when connecting to remote databases, downloading updates, or using external AI providers."
  }
];
