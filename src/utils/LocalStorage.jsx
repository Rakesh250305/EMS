// LocalStorage.js

const employees = [
  {
    "id": 1,
    "name": "Amit Verma",
    "firstName": "Amit",
    "email": "employee1@me.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Monthly Report",
        "description": "Compile and summarize the monthly performance metrics.",
        "date": "2025-04-10",
        "category": "Reporting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update Client Database",
        "description": "Verify and update contact info for all clients.",
        "date": "2025-04-05",
        "category": "Data Entry",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Team Meeting Preparation",
        "description": "Prepare agenda for next week’s team meeting.",
        "date": "2025-04-15",
        "category": "Planning",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "completed": 1,
      "newTask": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "name": "Neha Sharma",
    "firstName": "Neha",
    "email": "employee2@me.com",
    "password": "123",
    "tasks": [
      {
        "title": "Bug Fixing",
        "description": "Resolve issues reported in the ticketing system.",
        "date": "2025-04-08",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Call Follow-up",
        "description": "Send summary and action items to client.",
        "date": "2025-04-03",
        "category": "Communication",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 1,
      "completed": 1,
      "newTask": 0,
      "failed": 0
    }
  },
  {
    "id": 3,
    "name": "Ravi Kumar",
    "firstName": "Ravi",
    "email": "employee3@me.com",
    "password": "123",
    "tasks": [
      {
        "title": "Inventory Check",
        "description": "Audit office supplies and prepare a requisition list.",
        "date": "2025-04-06",
        "category": "Logistics",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Design UI Mockups",
        "description": "Create initial designs for new dashboard module.",
        "date": "2025-04-11",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Daily Standup",
        "description": "Participate in the daily standup call.",
        "date": "2025-04-17",
        "category": "Routine",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "completed": 0,
      "newTask": 1,
      "failed": 1
    }
  },
  {
    "id": 4,
    "name": "Pooja Reddy",
    "firstName": "Pooja",
    "email": "employee4@me.com",
    "password": "123",
    "tasks": [
      {
        "title": "Website SEO Audit",
        "description": "Run SEO tools and analyze website optimization.",
        "date": "2025-04-07",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Draft Newsletter",
        "description": "Prepare the April edition of the company newsletter.",
        "date": "2025-04-14",
        "category": "Content",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Social Media Plan",
        "description": "Design weekly content plan for social platforms.",
        "date": "2025-04-12",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "completed": 1,
      "newTask": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "name": "Karan Mehta",
    "firstName": "Karan",
    "email": "employee5@me.com",
    "password": "123",
    "tasks": [
      {
        "title": "Code Review",
        "description": "Review pull requests from junior developers.",
        "date": "2025-04-09",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "System Maintenance",
        "description": "Perform routine server maintenance tasks.",
        "date": "2025-04-13",
        "category": "IT",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "completed": 0,
      "newTask": 1,
      "failed": 0
    }
  }
];
const admin = [
  {
    "id": 100,
    "email": "admin@me.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const data = localStorage.getItem('employees');
  const employees = JSON.parse(data);

  const admin = JSON.parse(localStorage.getItem('admin'));

  return { employees, admin };
};
