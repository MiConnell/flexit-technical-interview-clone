with sales_data as (

    select * from {{ ref('stg_sales_data') }}

),

final as (

    select
        {{
            dbt_utils.generate_surrogate_key(
                ['customer_code','order_number','order_line_number','product_code','order_date']
            )
        }} fact_sales_key,
        {{ dbt_utils.generate_surrogate_key(['customer_code']) }} customer_key,
        {{
            dbt_utils.generate_surrogate_key(
                ['order_number','order_line_number']
            )
        }} order_key,
        {{ dbt_utils.generate_surrogate_key(['product_code']) }} product_key,
        {{ dbt_utils.generate_surrogate_key(['order_date']) }} date_key,
        order_date as date_day,
        quantity,
        price,
        sales,
        target
    from sales_data

)

select * from final
