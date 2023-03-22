---
date: '2022-01-01'
title: 'Software Development Engineer - 2'
company: 'TranZact'
location: 'Mumbai, India'
range: 'since Jan 2022'
url: 'https://letstranzact.com/'
---

Currently leading the tech projects squad with primary focus on identifying and harvesting opportunities to improve the technology stack and ensuring quality of engineering practice at TranZact.

- Redesigned the core Payments module to allow for more flexibility in the system and enhanced resilience, scalability, and maintainability.
- Integrated with banking systems to capture actual money flow between companies and their counter-parties through launch of Payments Collections and Payments Payout.
- Developed v2 APIs for Production, Subcontract and Vendor Mapping modules enabling complete deprecation of v1 services.
- Introduced full stack observability by streaming all infrastructure metrics to NewRelic.
- Reduced average server response times by over 50% to under 85ms by leveraging observability to identify bottlenecks such as unoptimised and redundant database queries.
- Practically zeroed server downtimes due to production incidents by tuning server configuration to avoid thrashing and better utilise the compute resources in production. We actually downgraded our instances (both RDS and EC2) and still saw better performance at half the cost.
- Introduced independent packages for the data models to break the monolith into a more maintainable codebase. This allowed us to move compute heavy reporting into a separate service thus decoupling its impact on primary services due to arbitrary load from report generation.
- Pioneered an internal CLI to automate spawning new staging servers and deploying frontend and backend code on staging and production environments paving the way for CI/CD.
- Upgraded primary application framework to Django 3.2 allowing native support for async web interface.
- Overhauled the Permissions module in the product to make access management more intuitive, flexible, intelligent, and scalable.
- Formalised the process of Scope of Work documentation before development and ensured quality of these documents through thorough review.