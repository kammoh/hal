#ifndef GRAPH_LAYOUT_SPINNER_WIDGET_H
#define GRAPH_LAYOUT_SPINNER_WIDGET_H

#include <QSvgRenderer>
#include <QWidget>

class graph_layout_spinner_widget final : public QWidget
{
    Q_OBJECT

public:
    explicit graph_layout_spinner_widget(QWidget* parent = nullptr);
    
    void start();
    void stop();

private Q_SLOTS:
    void handle_repaint_needed();

protected:
    void paintEvent(QPaintEvent* event) override;
    QSize sizeHint() const override;

private:
    QSvgRenderer* m_renderer;
};

#endif // GRAPH_LAYOUT_SPINNER_WIDGET_H
