-- depends_on: {{ ref('stg_sales_data') }}

select distinct
    product_code,
    product_name,
    product_category,
    msrp,
    --slowly changing dimension Type 1, using subquery
    (
        select max(order_date)
        from {{ source('salesforce', 'stg_sales_data') }} as b
        where a.product_code = b.product_code
    ) as recent_order_date,
    --slowly changing dimension Type 0, using subquery
    (
        select min(order_date)
        from {{ source('salesforce', 'stg_sales_data') }} as b
        where a.product_code = b.product_code
    ) as first_order_date
from {{ source('salesforce', 'stg_sales_data') }} as a
