// Connect to your database
use('okrmaster');

// 1. Initialize the Project collection
db.createCollection("projects");

db.projects.insertMany([
  {
    projectName: "Project Alpha",
    originalFundingAsked: 500000,
    actualFundingAllocated: 450000,
    burnedFunding: 100000
  },
  {
    projectName: "Project Beta",
    originalFundingAsked: 300000,
    actualFundingAllocated: 250000,
    burnedFunding: 60000
  },
  {
    projectName: "Project Gamma",
    originalFundingAsked: 800000,
    actualFundingAllocated: 750000,
    burnedFunding: 250000
  }
]);

// 2. Initialize the Timesheet collection
db.createCollection("timesheets");

db.timesheets.insertMany([
  {
    staffId: "S001",
    staffName: "Alice Johnson",
    weekCommencing: ISODate("2024-09-23T00:00:00Z"),
    projectName: "Project Alpha",
    hours: 40
  },
  {
    staffId: "S002",
    staffName: "Bob Smith",
    weekCommencing: ISODate("2024-09-23T00:00:00Z"),
    projectName: "Project Beta",
    hours: 35
  },
  {
    staffId: "S003",
    staffName: "Carol White",
    weekCommencing: ISODate("2024-09-23T00:00:00Z"),
    projectName: "Project Alpha",
    hours: 45
  },
  {
    staffId: "S001",
    staffName: "Alice Johnson",
    weekCommencing: ISODate("2024-09-30T00:00:00Z"),
    projectName: "Project Alpha",
    hours: 38
  },
  {
    staffId: "S002",
    staffName: "Bob Smith",
    weekCommencing: ISODate("2024-09-30T00:00:00Z"),
    projectName: "Project Beta",
    hours: 40
  }
]);

// 3. Initialize the Ratecard collection
db.createCollection("ratecard");

db.ratecard.insertMany([
  {
    region: "US",
    staffType: "Developer",
    rate: 1200 // Rate per month in USD
  },
  {
    region: "US",
    staffType: "Project Manager",
    rate: 1500
  },
  {
    region: "EU",
    staffType: "Developer",
    rate: 1000
  },
  {
    region: "EU",
    staffType: "Project Manager",
    rate: 1300
  }
]);

// 4. Initialize the Staffs collection
db.createCollection("staffs");

db.staffs.insertMany([
  {
    staffId: "S001",
    staffName: "Alice Johnson",
    staffType: "Contractor",
    region: "US"
  },
  {
    staffId: "S002",
    staffName: "Bob Smith",
    staffType: "Permanent",
    region: "EU"
  },
  {
    staffId: "S003",
    staffName: "Carol White",
    staffType: "Permanent",
    region: "US"
  }
]);

print("Database initialized successfully with staff data!");