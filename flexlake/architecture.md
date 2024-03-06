_Walk me through how you would architect a solution that could be deployed as an “off-the-shelf” data product (data warehouse) for multiple different customers. The customers may have different source systems and their mart models will be very similar, but should also be customizable (i.e. add/remove tables/columns and change some definitions). The solution should be deployable to cloud data warehouses (Snowflake, Redshift) or on-premise databases (Postgres, SQL Server). Focus the architecture on minimizing cost and product licensing needs (open source, where applicable), packaging/easy deployment, easy maintenance and stability._

**[The Tuva Project](https://tuvahealth.com/) is a dbt plugin which I've implemented in the past that takes standard healthcare data in a database or data warehouse and creates analytics-ready datasets, I would envision the exact same setup for this usecase via a dbt package. This would be open-source, no-cost, and completely flexible. As long as the user has data in a standard format and can use dbt it does not matter what source system or data warehouse is in use. Taking it one step further would be integrating it into the existing `dbt-business-intelligence` template as a starter project that can be cloned.**

### some more reading:

- https://github.com/tuva-health/tuva
- https://thetuvaproject.com/getting-started/quickstart
- https://thetuvaproject.com/
- https://tuvahealth.com/data-factory/

---

_Bonus: describe how we might be able to host a data Platform as a Service (PaaS) where we host the data warehouse infrastructure and ELT processes._

I threw together a small sample nextjs site as a potential frontend (assuming this is a separate product called 'flexlake') https://flexlake.vercel.app/
### A high-level architecture would be something like:

- a new customer signs up for an account
- they provide credentials to their source system, preferably a new user which only exists to read data
- we create a database for them in snowflake and provide a [reader account](https://docs.snowflake.com/en/user-guide/data-sharing-reader-create) via terraform
- data is ingested as a straight copy through either:
  - [confluent kafka](https://www.confluent.io/) for realtime/streaming data
  - fivetran for ease of use connecting
  - hand-rolled scripts using the source system's api
- using either [snowflake dynamic tables](https://docs.snowflake.com/en/user-guide/dynamic-tables-about) or dbt, data is transformed and domain data marts are created
- flexit sits on top of the database for further analysis

**this approach allows for the simplest environment for a customer. all they have to do is provide credentials to their source system and we provide database credentials to access transformed analytics-ready and standardized datasets.**

**bonus:
we provide a data catalog for them in addition to dbt documentation with a tool like [amundsen](https://www.amundsen.io/)**

### this is taking the approach of database and infrastructure first with viz as a secondary consideration and can be deployed regardless of viz tool

all of this would happen in one place as an online portal (similar to dbt cloud)

- sql query editor
- hosted flexit report builder for online vizualization
- hosted feature-rich documentation

considerations:

- snowflake expenses and limits
- scaling as customer count grows
- infrastructure costs for webapp
- different customer usecases

## pricing tiers:

### starter:

- one refresh a day
- extra-small snowflake warehouse
- no data catalog
- no embedded flexit environment

### professional:

- hourly refreshes
- medium snowflake warehouse
- data catalog
- embedded flexit environment

### enterprise:

- realtime data
- extra-large snowflake warehouse
- data catalog
- sql editor
- embedded flexit environment
