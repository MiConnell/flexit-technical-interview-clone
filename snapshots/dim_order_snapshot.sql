--slowly changing dimension Type 2
{% snapshot dim_order_snapshot %}

    {{
        config(
            target_schema='snapshots',
            strategy='check',
            unique_key='order_key',
            check_cols=['status']
        )
    }}

    select
        order_key,
        order_number,
        order_line_number,
        order_date,
        status
    from {{ ref('dim_order') }}

{% endsnapshot %}
